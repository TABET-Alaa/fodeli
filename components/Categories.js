import React from 'react'
import { View, Text ,ScrollView} from 'react-native'
import CategoriCard from './CategoriCard'
import tw from 'tailwind-react-native-classnames';


const Categories = () => {
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            >

            <CategoriCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title='testing1'/>
            <CategoriCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title='testing2'/>
            <CategoriCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title='testing4'/>
            <CategoriCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title='testing4'/>
            <CategoriCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title='testing4'/>

        </ScrollView>
    )
}

export default Categories
