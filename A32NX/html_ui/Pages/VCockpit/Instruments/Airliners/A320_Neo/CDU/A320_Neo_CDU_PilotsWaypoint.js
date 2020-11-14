class CDUPilotsWaypoint {
    static ShowPage(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.PilotsWaypoint;
        mcdu.setTemplate([
            ["PILOTS WAYPOINT", "1", "1"],
            ["IDENT"],
            ["[   ][color]blue"],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["", "NEW"],
            ["", "WAYPOINT>"],
            ["", "DELETE ALL}[color]blue"]
        ]);

        mcdu.rightInputDelay[4] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onRightInput[4] = () => {
            CDUNewWaypoint.ShowPage(mcdu);
        };
    }
}
