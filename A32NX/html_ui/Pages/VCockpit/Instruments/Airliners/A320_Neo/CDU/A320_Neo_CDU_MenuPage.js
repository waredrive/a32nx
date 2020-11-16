class CDUMenuPage {
    static ShowPage(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;
        const activeSystem = mcdu.activeSystem;
        let textATSU;
        let textFMGC;
        let textAIDS;
        let textCFDS;
        let textMaint;
        let textReturn;
        let selectedFMGC = false;
        let selectedATSU = false;
        let selectedAIDS = false;
        let selectedCFDS = false;
        let selectedMaint = false;

        const updateView = () => {
            textFMGC = "<FMGC (REQ)";
            textATSU = "<ATSU";
            textAIDS = "<AIDS";
            textCFDS = "<CFDS";
            textMaint = "MCDU MAINT>";
            textReturn = "RETURN>";
            if (activeSystem === "FMGC") {
                textFMGC = "<FMGC (REQ)[color]green";
            }
            if (activeSystem === "ATSU") {
                textATSU = "<ATSU[color]green";
            }
            if (activeSystem === "AIDS") {
                textAIDS = "<AIDS[color]green";
            }
            if (activeSystem === "CFDS") {
                textCFDS = "<CFDS[color]green";
            }
            if (activeSystem === "MAINT") {
                textMaint = "MCDU MAINT>[color]green";
            }
            if (selectedFMGC) {
                textFMGC = "<FMGC (SEL)[color]blue";
            }
            if (selectedATSU) {
                textATSU = "<ATSU (SEL)[color]blue";
            }
            if (selectedAIDS) {
                textAIDS = "<AIDS (SEL)[color]blue";
            }
            if (selectedCFDS) {
                textCFDS = "<CFDS (SEL)[color]blue";
            }
            if (selectedMaint) {
                textMaint = "(SEL) MCDU MAINT>[color]blue";
            }

            mcdu.setTemplate([
                ["MCDU MENU"],
                ["", "SELECT"],
                [textFMGC, "NAV B/UP>"],
                [""],
                [textATSU],
                [""],
                [textAIDS],
                [""],
                [textCFDS],
                [""],
                ["", "OPTIONS>"],
                [""],
                ["", textReturn]
            ]);
        };

        updateView();

        mcdu.showErrorMessage("SELECT DESIRED SYSTEM");

        mcdu.onLeftInput[0] = () => {
            mcdu.showErrorMessage("WAIT FOR SYSTEM RESPONSE");
            selectedFMGC = true;
            updateView();
            setTimeout(() => {
                mcdu.showErrorMessage("");
                CDUIdentPage.ShowPage(mcdu);
            }, Math.floor(Math.random() * 400) + 100);
        };

        mcdu.onLeftInput[1] = () => {
            mcdu.showErrorMessage("WAIT FOR SYSTEM RESPONSE");
            selectedATSU = true;
            updateView();
            setTimeout(() => {
                mcdu.showErrorMessage("");
                CDUAtsuMenu.ShowPage(mcdu);
            }, Math.floor(Math.random() * 400) + 200);
        };

        mcdu.onLeftInput[2] = () => {
            mcdu.showErrorMessage("WAIT FOR SYSTEM RESPONSE");
            selectedAIDS = true;
            updateView();
            setTimeout(() => {
                mcdu.showErrorMessage("");
                CDU_AIDS_MainMenu.ShowPage(mcdu);
            }, Math.floor(Math.random() * 400) + 400);
        };

        mcdu.onLeftInput[3] = () => {
            mcdu.showErrorMessage("WAIT FOR SYSTEM RESPONSE");
            selectedCFDS = true;
            updateView();
            setTimeout(() => {
                mcdu.showErrorMessage("");
                CDUCfdsMainMenu.ShowPage(mcdu);
            }, Math.floor(Math.random() * 400) + 400);
        };

        mcdu.onRightInput[4] = () => {
            mcdu.showErrorMessage("WAIT FOR SYSTEM RESPONSE");
            selectedMaint = true;
            updateView();
            setTimeout(() => {
                mcdu.showErrorMessage("");
                CDU_OPTIONS_MainMenu.ShowPage(mcdu);
            }, Math.floor(Math.random() * 400) + 200);
        };

        mcdu.onDir = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUDirectToPage.ShowPage(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
        mcdu.onProg = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUProgressPage.ShowPage(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
        mcdu.onPerf = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUPerformancePage.ShowPage(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
        mcdu.onInit = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUInitPage.ShowPage1(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
        mcdu.onData = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUDataIndexPage.ShowPage1(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
        mcdu.onFpln = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUFlightPlanPage.ShowPage(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
        mcdu.onRad = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUNavRadioPage.ShowPage(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
        mcdu.onFuel = () => {
            const cur = mcdu.page.Current;
            setTimeout(() => {
                if (mcdu.page.Current === cur) {
                    CDUFuelPredPage.ShowPage(mcdu);
                }
            }, mcdu.getDelaySwitchPage());
        };
    }
}
