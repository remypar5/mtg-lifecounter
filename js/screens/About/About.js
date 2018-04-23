import React from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';
import bgiconSrc from '../Game/bgicon.png';
import { Text, PageContainer, BackgroundImage } from '../../components';

const { heading, paragraph, link } = styles;

const About = () => (
    <PageContainer>
        <BackgroundImage source={bgiconSrc} />
        <ScrollView>
            <Text type="heading" style={heading}>About</Text>
            <Text type="paragraph" style={paragraph}>
                The MTG Lifecounter app is for Magic: The Gathering players. It helps keep track of
                up to 6 players{"'"} life totals, and more will be added later.
            </Text>
            <Text type="paragraph" style={paragraph}>
                This project is for me to learn some new technologies, so if you have suggestions
                on how to improve the functionalities, please
                <Text type="paragraph" style={link}>contact me</Text>.
                I will see if your idea fits my vision of the MTG Lifecounter. Even better: rate
                and review the app in the Play Store as honest as possible.
            </Text>

            <Text type="heading" style={heading}>Translations</Text>
            <Text type="paragraph" style={paragraph}>
                In the near future, I want to start supporting every language in which Magic: The
                Gathering cards are being printed. And Dutch. Because that{"'"}s my mother tongue.
                For this, I am looking for users who want to help me translate the few bits of
                text in this app for their own language. I{"'"}m still looking for users that can
                read/write Simplified Chinese, Traditional Chinese, French, German, Italian,
                Japanese, Korean, Portuguese, Russian and Spanish.
            </Text>

            <Text type="heading" style={heading}>Special thanks</Text>
            <Text type="paragraph" style={paragraph}>
                A special thanks goes to Rory, my colleague, who reviews my code every now and
                then. And to my friend Thijs, who designed everything in and around the MTG
                Lifecounter app.
            </Text>
        </ScrollView>
    </PageContainer>
);

export default About;
