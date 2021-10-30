jQuery("#simulation")
  .on("click", ".s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8de64932-9241-49d3-8f32-e7263be08d66"
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
                    "target": [ "#s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 #s-Button_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#80BDFE",
                      "border-right-color": "#80BDFE",
                      "border-bottom-color": "#80BDFE",
                      "border-left-color": "#80BDFE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/edbae4c7-568e-4e8b-8f64-be9a0d4a198b"
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
    } else if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8de64932-9241-49d3-8f32-e7263be08d66"
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
  .on("focusin", ".s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 #s-Input" ],
                    "attributes": {
                      "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 #s-Input input" ],
                    "attributes": {
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 #s-Input > .borderLayer" ],
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
  .on("focusout", ".s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 #s-Input" ],
                    "attributes": {
                      "filter": "none",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 #s-Input input" ],
                    "attributes": {
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-c8c36729-0afa-4e3a-bda2-aa5d9a846ba2 #s-Input > .borderLayer" ],
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
  });