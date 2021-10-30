(function(window, undefined) {
  var dictionary = {
    "c8c36729-0afa-4e3a-bda2-aa5d9a846ba2": "Reset_Password",
    "d5035b0d-1d47-4acf-beca-cb92fce32f51": "User_interface",
    "9e3d0388-846f-4832-8c11-ae052226143c": "Register_Success",
    "edbae4c7-568e-4e8b-8f64-be9a0d4a198b": "Check_Mail",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "94b28adc-dcb4-4a62-9a05-ea928254a266": "Singup",
    "8de64932-9241-49d3-8f32-e7263be08d66": "Login",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);