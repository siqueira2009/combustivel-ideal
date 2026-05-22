import React, { useCallback, useContext, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Fuel, Droplet } from 'lucide-react-native';

import CustomButton from './CustomButton';
import ResultContext from '../contexts/ResultSheet';

export default function ResultSheet() {
    const bottomSheetRef = useContext(ResultContext);

    const [isOpen, setIsOpen] = useState(false);
    const snapPoints = useMemo(() => ['50%'], []);

    const renderBackdrop = useCallback((props) => (
        <BottomSheetBackdrop 
            {...props}
            pressBehavior="close"
            appearsOnIndex={0}
            disappearsOnIndex={-1}
        />
    ), []);

    function closeSheet() {
        bottomSheetRef.current?.dismiss();
    }

    return (
        <BottomSheetModal
            backgroundStyle={styles.bottomSheet}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            enableDynamicSizing={false}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={styles.bottomSheetHandler}
            onAnimate={(fromIndex, toIndex) => setIsOpen(toIndex > -1)}
        >
            <BottomSheetView style={styles.bottomSheetContainer}>
                <Text style={styles.text}>A melhor escolha é</Text>
                <View style={styles.bestChoiceView}>
                    <Droplet style={styles.icon} width={92} height={92} strokeWidth={1.5}/>
                    <Text style={styles.bestChoice}>Etanol</Text>
                    <Text style={styles.subText}>Ele está custando 47% da gasolina</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton title={"Entendi"} icon={"Check"} onPress={closeSheet}/>
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    )
}

const styles = StyleSheet.create({
    bottomSheet: {

        backgroundColor: '#F3F4F8',
        flex: 1,
    },

    bottomSheetContainer: {
        paddingTop: 5,
        paddingHorizontal: 10
    },  

    buttonContainer: {
        marginTop: 20,
    },
    
    bottomSheetHandler: {
        width: '25%',
        backgroundColor: '#C8C8C8',
        borderRadius: 100   
    },

    text: {
        fontSize: 28,
        textAlign: 'center',
    },

    icon: {
        alignSelf: 'center'
    },

    bestChoiceView: {
        marginTop: 20,
    },  

    bestChoice: {
        fontSize: 48,
        textAlign: 'center'
    },

    subText: { 
        marginTop: 10,
        color: '#30302E',
        fontSize: 20,
        textAlign: 'center',
    },
});