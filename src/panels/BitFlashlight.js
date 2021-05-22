import {
    Group,
    Div,
    Panel,
    PanelHeader,
    View, PanelHeaderContent
} from "@vkontakte/vkui";

export default function TeamCard() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    BitFlashlight
                    <PanelHeaderContent
                        status={"Created by NaniB0ots"}>
                    </PanelHeaderContent>
                </PanelHeader>

                <Group>
                    <Div>NaniB0ots</Div>
                </Group>

            </Panel>
        </View>
    )
}