class CDUAocMessagesReceived {
    static ShowPage(mcdu, messages = null, offset = 5) {
        if (!messages) {
            messages = mcdu.getMessages();
        }
        mcdu.clearDisplay();

        const msgTimeHeaders = [];
        msgTimeHeaders.length = 6;
        for (let i = 5; i > 0; i--) {
            let header = "";
            if (messages[offset - i]) {
                header += messages[offset - i]["time"];
                if (messages[offset - i]["opened"]) {
                    header += " - VIEWED[color]green";
                } else {
                    header += " - NEW[color]green";
                }
            }
            msgTimeHeaders[i] = header;
        }

        mcdu.setTemplate([
            ["AOC RCVD MSGS"],
            [msgTimeHeaders[5]],
            [`${messages[offset - 5] ? "<" + messages[offset - 5]["type"] : "NO MESSAGES"}`],
            [msgTimeHeaders[4]],
            [`${messages[offset - 4] ? "<" + messages[offset - 4]["type"] : ""}`],
            [msgTimeHeaders[3]],
            [`${messages[offset - 3] ? "<" + messages[offset - 3]["type"] : ""}`],
            [msgTimeHeaders[2]],
            [`${messages[offset - 2] ? "<" + messages[offset - 2]["type"] : ""}`],
            [msgTimeHeaders[1]],
            [`${messages[offset - 1] ? "<" + messages[offset - 1]["type"] : ""}`],
            [""],
            ["<RETURN"]
        ]);

        if (messages.length > 4) {
            mcdu.onNextPage = () => {
                if (messages[offset - 1]) {
                    offset *= 2;
                }
                CDUAocMessagesReceived.ShowPage(mcdu, messages, offset);
            };
            mcdu.onPrevPage = () => {
                if (messages[offset - 1]) {
                    offset /= 2;
                }
                CDUAocMessagesReceived.ShowPage(mcdu, messages, offset);
            };
        }

        mcdu.leftInputDelay[0] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[0] = (value) => {
            if (messages[offset - 5]) {
                if (value === FMCMainDisplay.clrValue) {
                    mcdu.deleteMessage(offset - 5);
                    CDUAocMessagesReceived.ShowPage(mcdu, messages, offset);
                } else {
                    CDUAocRequestsMessage.ShowPage(mcdu, messages[offset - 5]);
                }
            }
        };

        mcdu.leftInputDelay[1] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[1] = (value) => {
            if (messages[offset - 4]) {
                if (value === FMCMainDisplay.clrValue) {
                    mcdu.deleteMessage(offset - 4);
                    CDUAocMessagesReceived.ShowPage(mcdu, messages, offset);
                } else {
                    CDUAocRequestsMessage.ShowPage(mcdu, messages[offset - 4]);
                }
            }
        };

        mcdu.leftInputDelay[2] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[2] = (value) => {
            if (messages[offset - 3]) {
                if (value === FMCMainDisplay.clrValue) {
                    mcdu.deleteMessage(offset - 3);
                    CDUAocMessagesReceived.ShowPage(mcdu, messages, offset);
                } else {
                    CDUAocRequestsMessage.ShowPage(mcdu, messages[offset - 3]);
                }
            }
        };

        mcdu.leftInputDelay[3] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[3] = (value) => {
            if (messages[offset - 2]) {
                if (value === FMCMainDisplay.clrValue) {
                    mcdu.deleteMessage(offset - 2);
                    CDUAocMessagesReceived.ShowPage(mcdu, messages, offset);
                } else {
                    CDUAocRequestsMessage.ShowPage(mcdu, messages[offset - 2]);
                }
            }
        };

        mcdu.leftInputDelay[4] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[4] = (value) => {
            if (messages[offset - 1]) {
                if (value === FMCMainDisplay.clrValue) {
                    mcdu.deleteMessage(offset - 1);
                    CDUAocMessagesReceived.ShowPage(mcdu, messages, offset);
                } else {
                    CDUAocRequestsMessage.ShowPage(mcdu, messages[offset - 1]);
                }
            }
        };

        mcdu.leftInputDelay[5] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[5] = () => {
            CDUAocMenu.ShowPage(mcdu);
        };
    }
}
