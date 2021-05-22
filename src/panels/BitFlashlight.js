import React from "react";
import {
    Group,
    Div,
    Panel,
    PanelHeader,
    View, PanelHeaderContent, Checkbox
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import BitFlashlight from "./BitFlashlight.css"

class TeamCard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            is_available: 123,
            checkboxList: [true, true, true, true, true, true, true, true]
        }
    }


    initFlashlight() {
        bridge.send("VKWebAppFlashGetInfo").then(
            data => {
                console.log(data);
                console.log('Доступ получен');
                bridge.send("VKWebAppFlashSetLevel", {"level": 1});
                this.state.is_available = data.is_available
                return true;
            }
        ).catch(
            error => {
                console.log(error);
                return false;
            }
        );
    }

    handleChangeChk(number) {
        this.state.checkboxList[number] = !this.state.checkboxList[number]
        console.log(number);
        console.log(this.state.checkboxList[number]);
    }


    render() {
        this.initFlashlight();

        let item = 0;

        setInterval(() => {

            if (this.state.checkboxList[item]) {
                bridge.send("VKWebAppFlashSetLevel", {"level": 1});
                console.log(`Фонарь ${item} включен`);
            } else {
                bridge.send("VKWebAppFlashSetLevel", {"level": 0});
                console.log(`Фонарь ${item} выключен`);
            }

            item++;

            if (item === 8) {
                console.log("done");
                item = 0
            }

        }, 1000);


        return (
            <View activePanel="main">
                <Panel id="main">
                    <PanelHeader>
                        BitFlashlight
                        <PanelHeaderContent
                            status={
                                "Created by NaniB0ots"
                            }
                        >
                        </PanelHeaderContent>
                    </PanelHeader>

                    <Group>
                        <Div>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[0]}
                                   onChange={() => this.handleChangeChk(0)}/>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[1]}
                                   onChange={() => this.handleChangeChk(1)}/>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[2]}
                                   onChange={() => this.handleChangeChk(2)}/>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[3]}
                                   onChange={() => this.handleChangeChk(3)}/>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[4]}
                                   onChange={() => this.handleChangeChk(4)}/>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[5]}
                                   onChange={() => this.handleChangeChk(5)}/>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[6]}
                                   onChange={() => this.handleChangeChk(6)}/>
                            <input className={"checkbox"} type="checkbox" defaultChecked={this.state.checkboxList[7]}
                                   onChange={() => this.handleChangeChk(7)}/>

                        </Div>
                    </Group>

                </Panel>
            </View>
        )
    }
}

export default TeamCard;