import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const CategoriCard = ({imgUrl, title}) => {
    return (
        <TouchableOpacity style={tw`relative mr-2`}>
            <Image source={{
                uri: imgUrl
            }}
            style={tw`h-20 w-20 rounded `}
            />
            <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoriCard
