import React, { Component } from "react";
import { renderComponent } from "../utils";

export default class Fetch extends Component {
  state = {
    data: null,
    didError: false,
    requestFinished: false
  };
  createConfig() {
    let config = {
      ...this.props.config,
      method: "GET"
    };

    return config;
  }
  defaultError(e) {
    throw new Error(e);
  }
  async sendFetch() {
    let {
      onError = this.defaultError,
      url,
      responseType = "json"
    } = this.props;

    try {
      let resp = await fetch(url, this.createConfig());
      let data = await resp[responseType]();

      return data;
    } catch (e) {
      onError(e);
      throw e;
    }
  }

  async componentDidMount() {
    try {
      let data = await this.sendFetch();

      this.setState({ data, requestFinished: true });
    } catch (e) {
      this.setState({ didError: true, data: e });
    }
  }

  render = () => {
    let { data, didError, requestFinished } = this.state;
    let { LoadingComponent, ...props } = this.props;

    if (!requestFinished && LoadingComponent) {
      return <LoadingComponent />;
    }

    return renderComponent(props, { data, didError });
  };
}
