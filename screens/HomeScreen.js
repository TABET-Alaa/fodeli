import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { UserIcon, ChevronDownIcon, DocumentMagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline"
import Categories from '../components/categories';
import Featured from '../components/Featured';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])



    return (
        <SafeAreaView style={tw`bg-white pt-5`}>
            {/* Header */}
            <View style={tw`flex flex-row pb-3 items-center mx-4 space-x-2 px-4`}>
                <Image
                    source={{
                        uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450"
                    }}
                    style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
                />

                <View style={tw`flex-1`}>
                    <Text style={tw`font-bold text-gray-400 text-xs`}> Deliver now </Text>
                    <Text style={tw`font-bold text-xl`}>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Input */}
            <View style={tw`flex-row items-center space-x-2 pb-2 mx-4 px-4`}>
                <View style={tw`flex-row flex-1 space-x-2 bg-gray-200 p-3`}>
                    <DocumentMagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants et Brasserie"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsHorizontalIcon color="#00CCBB" />
            </View>

            {/* body */}
            <ScrollView>
                {/* Categories */}

                <Categories style={tw`bg-gray-100`} />

                {/* Features */}
                <Featured
                    id="1"
                    title="Featured"
                    description="Paid placement paid placement"
                    FeaturedCategory="featured"
                />

                {/* Tasty Discount  */}
                <Featured
                    id="2"
                    title="Featured"
                    description="Paid placement paid placement"
                    FeaturedCategory="featured"
                />

                {/* Offers near you  */}
                <Featured
                    id="3"
                    title="Featured"
                    description="Paid placement paid placement"
                    FeaturedCategory="featured"
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
