import React from 'react';
import classes from './classes'
import Scorecard from './Scorecard';
import {getBreedImg, getBreed} from './utils';

const getTopK = (acts, k) => {
    const topK = Array.from(acts)
        .map((act, i) => [act, i])
        .sort((a, b) => {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        })
        .reverse()
        .slice(0, k)

    // denominator of softmax function
    const denominator = acts.map(y => Math.exp(y)).reduce((a,b) => a+b)
    return topK.map(([act, i], _, acts) => ({
        breed: classes[i],
        act,
        prob: Math.exp(act) / denominator,
    }));
}

export default function Predictions({output}) {
    if (!output) return null;
    const items = getTopK(output, 5).map(({breed, prob}) => ({
        name: getBreed(breed),
        percentage: (prob * 100).toFixed(2),
        avatar: getBreedImg(breed),
    }));
    return <Scorecard items={items} />;
}