import React, { Component } from "react";
import { renderComponent } from "../utils";

export default class Fetch extends Component {
  state = {
    data: null,
    didError: false,
    requestFinished: false
  };
  createConfig() {
    const config = {
      ...this.props.config,
      method: "GET"
    };

    return config;
  }
  defaultError(e) {
    throw new Error(e);
  }
  async sendFetch() {
    const {
      onError = this.defaultError,
      url,
      responseType = "json"
    } = this.props;

    try {
      const resp = await fetch(url, this.createConfig());
      const data = await resp[responseType]();

      return data;
    } catch (e) {
      onError(e);
      throw e;
    }
  }

  async componentDidMount() {
    try {
      const data = await this.sendFetch();

      this.setState({ data, requestFinished: true });
    } catch (e) {
      this.setState({ didError: true, data: e });
    }
  }

  render = () => {
    const { data, didError, requestFinished } = this.state;
    const { LoadingComponent, ...props } = this.props

    if (!requestFinished && LoadingComponent) {
      return <LoadingComponent />;
    }

    return renderComponent(props, { data, didError });
  };
}
