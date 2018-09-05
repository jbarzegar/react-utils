import React, { Component } from "react";

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
    const { data, didError } = this.state;

    if (!this.state.requestFinished && this.props.LoadingComponent) {
      return <this.props.LoadingComponent />;
    }

    return data !== null && typeof this.props.children === "function"
      ? this.props.children({ data, didError })
      : this.props.children;
  };
}
