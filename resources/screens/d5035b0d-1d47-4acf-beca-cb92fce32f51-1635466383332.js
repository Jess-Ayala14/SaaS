jQuery("#simulation")
  .on("click", ".s-d5035b0d-1d47-4acf-beca-cb92fce32f51 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Tab_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E8ECEF",
                      "border-right-color": "#E8ECEF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#E8ECEF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .borderLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#E8ECEF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 span",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 span" ],
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
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Contact" ]
                  },
                  "exectype": "serial",
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
    } else if(jFirer.is("#s-Tab_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E8ECEF",
                      "border-right-color": "#E8ECEF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#E8ECEF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .borderLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#E8ECEF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 span",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 span" ],
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
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Profile" ]
                  },
                  "exectype": "serial",
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
    } else if(jFirer.is("#s-Tab_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E8ECEF",
                      "border-right-color": "#E8ECEF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#E8ECEF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .borderLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#E8ECEF",
                      "border-left-color": "#FFFFFF",
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0px",
                      "border-top-right-radius": "0px",
                      "border-bottom-right-radius": "0px",
                      "border-bottom-left-radius": "0px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 span",
                  "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 span" ],
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
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Home" ]
                  },
                  "exectype": "serial",
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
  .on("mouseenter dragenter", ".s-d5035b0d-1d47-4acf-beca-cb92fce32f51 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Tab_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E8ECEF",
                      "border-right-color": "#E8ECEF",
                      "border-bottom-color": "#E8ECEF",
                      "border-left-color": "#E8ECEF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
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
    } else if(jFirer.is("#s-Tab_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E8ECEF",
                      "border-right-color": "#E8ECEF",
                      "border-bottom-color": "#E8ECEF",
                      "border-left-color": "#E8ECEF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
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
    } else if(jFirer.is("#s-Tab_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E8ECEF",
                      "border-right-color": "#E8ECEF",
                      "border-bottom-color": "#E8ECEF",
                      "border-left-color": "#E8ECEF",
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
                    }
                  },{
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Tab_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "4px",
                      "border-top-right-radius": "4px",
                      "border-bottom-right-radius": "4px",
                      "border-bottom-left-radius": "4px"
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
    } else if(jFirer.is("#s-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Rectangle_5 span" ],
                    "attributes": {
                      "color": "#0256B3"
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
    } else if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Rectangle_6 span" ],
                    "attributes": {
                      "color": "#0256B3"
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
    } else if(jFirer.is("#s-Rectangle_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d5035b0d-1d47-4acf-beca-cb92fce32f51 #s-Rectangle_7 span" ],
                    "attributes": {
                      "color": "#0256B3"
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
  .on("mouseleave dragleave", ".s-d5035b0d-1d47-4acf-beca-cb92fce32f51 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Tab_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Tab_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Tab_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_7")) {
      jEvent.undoCases(jFirer);
    }
  });