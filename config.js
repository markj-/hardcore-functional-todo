System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "/app": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "pointfree-fantasy": "npm:pointfree-fantasy@0.1.3",
    "ramda": "npm:ramda@0.21.0",
    "ramda-fantasy": "npm:ramda-fantasy@0.4.1",
    "typescript": "npm:typescript@1.8.10",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash._createwrapper@4.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.curry@4.0.1": {
      "lodash._createwrapper": "npm:lodash._createwrapper@4.0.4"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pointfree-fantasy@0.1.3": {
      "lodash.curry": "npm:lodash.curry@4.0.1"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:ramda-fantasy@0.4.1": {
      "ramda": "npm:ramda@0.17.1"
    },
    "npm:ramda@0.17.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ramda@0.21.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
