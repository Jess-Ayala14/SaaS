jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ecca2ade-93c6-4693-9b58-4e13a2eb9842"
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
    } else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_15 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_15 span" ],
                    "attributes": {
                      "color": "#333333"
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
    } else if(jFirer.is("#s-Paragraph_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_13 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#B5BABD",
                      "border-right-color": "#B5BABD",
                      "border-bottom-color": "#B5BABD",
                      "border-left-color": "#B5BABD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_4" ]
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
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Roboto-Regular',Arial"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_28 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_27 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Roboto-Regular',Arial"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_26 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_31 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Roboto-Regular',Arial"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_29 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Paragraph_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#007BFF",
                      "border-right-color": "#007BFF",
                      "border-bottom-color": "#007BFF",
                      "border-left-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .backgroundLayer > .colorLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .backgroundLayer > .imageLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .borderLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 span",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#007BFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": null,
              "actions": [
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#007BFF",
                      "border-right-color": "#007BFF",
                      "border-bottom-color": "#007BFF",
                      "border-left-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .backgroundLayer > .colorLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .backgroundLayer > .imageLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .borderLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 span",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#007BFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": null,
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#007BFF",
                      "border-right-color": "#007BFF",
                      "border-bottom-color": "#007BFF",
                      "border-left-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .backgroundLayer > .colorLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .backgroundLayer > .imageLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 > .borderLayer",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 span",
                  "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#007BFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": null,
              "actions": [
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
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_13") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_13").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_13") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6C757D"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_13 > .backgroundLayer > .imageLayer" ],
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
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#5A6269"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_13 > .backgroundLayer > .imageLayer" ],
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
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_13")) {
      jEvent.undoCases(jFirer);
    }
  });