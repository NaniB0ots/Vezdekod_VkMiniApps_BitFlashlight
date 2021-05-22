import React from "react";
import {
    Group,
    Div,
    Panel,
    PanelHeader,
    View, PanelHeaderContent, Checkbox, Button
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import BitFlashlight from "./BitFlashlight.css"

let timer;

class TeamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_available: 123,
            checkboxList: [true, true, true, true, true, true, true, true],
            is_started: false
        };
        this.initFlashlight();
    }


    initFlashlight() {
        console.log('Получение доступа...')
        bridge.send("VKWebAppFlashGetInfo").then(
            data => {
                console.log(data);
                console.log('Доступ получен');
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
    }


    start_dance() {
        console.log('Начали!')
        let item = 0;
        timer = setInterval(() => {

            if (this.state.checkboxList[item]) {
                bridge.send("VKWebAppFlashSetLevel", {"level": 1});
                console.log(`Фонарь ${item} включен`);
            } else {
                bridge.send("VKWebAppFlashSetLevel", {"level": 0});
                console.log(`Фонарь ${item} выключен`);
            }

            item++;

            if (item === 8) {
                item = 0
            }

        }, 1000);
    }

    handleStartButton(is_started) {
        this.setState({
            checkboxList: this.state.checkboxList,
            is_started: !is_started
        })
        if (!is_started) {
            this.start_dance()
        } else {

            clearInterval(timer);
            console.log('Остановлено!')
            bridge.send("VKWebAppFlashSetLevel", {"level": 0});
            console.log(`Фонарь выключен`);
        }

    }


    render() {


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


                        <Div>
                            {!this.state.is_started ?
                                <Button onClick={() => this.handleStartButton(this.state.is_started)}
                                        mode="commerce">Старт</Button>
                                :
                                <Button onClick={() => this.handleStartButton(this.state.is_started)}
                                        mode="destructive">Стоп</Button>
                            }
                        </Div>
                    </Group>

                </Panel>
            </View>
        )
    }
}

export default TeamCard;