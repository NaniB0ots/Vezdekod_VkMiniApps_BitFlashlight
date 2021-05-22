import React from "react";
import {
    Group,
    Div,
    Panel,
    PanelHeader,
    View, PanelHeaderContent
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";


class TeamCard extends React.Component{
    init() {
        console.log('asd!!')
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
                        <Div>NaniB0ots</Div>
                    </Group>

                </Panel>
            </View>
        )
    }
}

export default TeamCard;