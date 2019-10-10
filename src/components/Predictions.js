import React from 'react';
import classes from './classes'
import beagle from '../beagle.jpg'
import Scorecard from './Scorecard';

const getBreed = className => className.split('_').map(p => {
    return p.charAt(0).toUpperCase() + p.slice(1)
}).join(' ')

const getTopK = (acts, k) => {
    const top5 = Array.from(acts)
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
    return top5.map(([act, i], _, acts) => ({
        breed: getBreed(classes[i]),
        act,
        prob: Math.exp(act) / denominator,
    }));
}

export default function Predictions({output}) {
    if (!output) return null;
    const items = getTopK(output, 5).map(({breed, prob}) => ({
        name: breed,
        percentage: (prob * 100).toFixed(2),
        avatar: beagle,
    }));
    return <Scorecard items={items} />;
}