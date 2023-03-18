import React from 'react'
import { View, Text } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import tw from 'tailwind-react-native-classnames';

const Featured = ({ id, title, description, FeaturedCategory }) => {
    return (
        <View>
            <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
                <Text style={tw`font-bold text-lg`}>{title}</Text>
                <ArrowRightIcon color="#00CCBB"/>
            </View> 
            <Text style={tw`text-xs text-gray-500 px-4`}> {description} </Text>
        </View>

    )
}

export default Featured
