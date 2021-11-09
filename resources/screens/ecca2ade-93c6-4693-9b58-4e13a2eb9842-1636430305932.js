jQuery("#simulation")
  .on("click", ".s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_6")) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Rectangle_15 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Rectangle_15 span" ],
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
    } else if(jFirer.is("#s-Paragraph_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_17 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_2 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_3 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Badge")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Home" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#007BFF",
                      "border-right-color": "#007BFF",
                      "border-bottom-color": "#007BFF",
                      "border-left-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge span" ],
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 span" ],
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
    } else if(jFirer.is("#s-Badge_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Profile" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#007BFF",
                      "border-right-color": "#007BFF",
                      "border-bottom-color": "#007BFF",
                      "border-left-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge_1 span" ],
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Badge span" ],
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
  .on("mouseleave dragleave", ".s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_17") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_17").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_17") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6C757D"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_17 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_1 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_2") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_2").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_2") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_2 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_3") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_3").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_3") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#007BFF"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_3 > .backgroundLayer > .imageLayer" ],
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
  .on("mouseenter dragenter", ".s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#5A6269"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_17 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Paragraph_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_10 span" ],
                    "attributes": {
                      "text-decoration": "underline"
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
    } else if(jFirer.is("#s-Paragraph_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_9 span" ],
                    "attributes": {
                      "text-decoration": "underline"
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
    } else if(jFirer.is("#s-Paragraph_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Paragraph_8 span" ],
                    "attributes": {
                      "text-decoration": "underline"
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
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0069D9"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_1 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0069D9"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_2 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0069D9"
                    }
                  },{
                    "target": [ "#s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 #s-Button_3 > .backgroundLayer > .imageLayer" ],
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
  .on("mouseleave dragleave", ".s-ecca2ade-93c6-4693-9b58-4e13a2eb9842 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    }
  });