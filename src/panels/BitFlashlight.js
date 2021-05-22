import React from "react";
import {
    Group,
    Div,
    Panel,
    PanelHeader,
    View, PanelHeaderContent
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";


class TeamCard extends React.Component {
    is_available = 123;

    init() {

        console.log('asd!!')
        bridge.send('VKWebAppInit', {});


        bridge.send("VKWebAppShowWallPostBox", {"message": "Hello!"}).then(
            data => console.log(data)
        ).catch(
            error => console.log(error)
        );
        bridge.send("VKWebAppShowOrderBox", {type: "item", item: "item_id_123"});
        bridge.subscribe((e) => {
                if (e.type == 'VKWebAppShowOrderBoxResult') {
                    console.log(e.data.status);
                }
            }
        );
    }

    initFlashlight() {
        bridge.send("VKWebAppFlashGetInfo").then(
            data => {
                console.log(data);
                console.log('Доступ получен');
                bridge.send("VKWebAppFlashSetLevel", {"level": 1});
                this.is_available = data.is_available
                return true;
            }
        ).catch(
            error => {
                console.log(error);
                return false;
            }
        );
    }


    render() {
        this.initFlashlight();

        let count = 10;

        let timer = setInterval(function () {
            if (count % 2 === 0) {
                bridge.send("VKWebAppFlashSetLevel", {"level": 0});
                console.log('Фонарь Выключен');
            } else {
                bridge.send("VKWebAppFlashSetLevel", {"level": 1});
                console.log('Фонарь включен');

            }

            if (count <= 0) {
                clearInterval(timer);
                console.log("done");
            } else {
                console.log(count);
            }
            count--;
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
                        <Div>is_available: {this.is_available}</Div>
                    </Group>

                </Panel>
            </View>
        )
    }
}

export default TeamCard;