jQuery("#simulation")
  .on("click", ".s-8de64932-9241-49d3-8f32-e7263be08d66 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/94b28adc-dcb4-4a62-9a05-ea928254a266"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Button_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#80BDFE",
                      "border-right-color": "#80BDFE",
                      "border-bottom-color": "#80BDFE",
                      "border-left-color": "#80BDFE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c8c36729-0afa-4e3a-bda2-aa5d9a846ba2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-8de64932-9241-49d3-8f32-e7263be08d66 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_1" ],
                    "attributes": {
                      "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_1 input" ],
                    "attributes": {
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#80BDFF",
                      "border-right-color": "#80BDFF",
                      "border-bottom-color": "#80BDFF",
                      "border-left-color": "#80BDFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_password")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_password" ],
                    "attributes": {
                      "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_password input" ],
                    "attributes": {
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_password > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#80BDFF",
                      "border-right-color": "#80BDFF",
                      "border-bottom-color": "#80BDFF",
                      "border-left-color": "#80BDFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-8de64932-9241-49d3-8f32-e7263be08d66 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_1" ],
                    "attributes": {
                      "filter": "none",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_1 input" ],
                    "attributes": {
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_password")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_password" ],
                    "attributes": {
                      "filter": "none",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_password input" ],
                    "attributes": {
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Input_password > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8de64932-9241-49d3-8f32-e7263be08d66 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Button_1 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-8de64932-9241-49d3-8f32-e7263be08d66 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0069D9"
                    }
                  },{
                    "target": [ "#s-8de64932-9241-49d3-8f32-e7263be08d66 #s-Button_1 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8de64932-9241-49d3-8f32-e7263be08d66 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    }
  });