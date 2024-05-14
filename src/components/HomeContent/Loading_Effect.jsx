import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Loading_Effect = ({ Size }) => {
    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton height={Size} />
                </p>
            </SkeletonTheme>
        </>
    )
}

export default Loading_Effect
