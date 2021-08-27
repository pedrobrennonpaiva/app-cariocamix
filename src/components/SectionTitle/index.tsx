import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

type SectionProps = {
    title: string;
}

type Props = {
    data: SectionProps;
}

export const SectionTitle = ({ data }: Props) => {

    var myComp: Text | null;

    return (
        <Text style={styles.textTitle} ref={t => myComp = t}>
            {data.title}
        </Text>
    )
}
