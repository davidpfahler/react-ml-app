import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        width: 299,
        height: 299,
    },
    item: {
        paddingTop: 10,
    },
});

export default function Scorecard({items}) {
    const classes = useStyles();
    return <Card className={classes.card}><List dense>
        {items.map(({avatar, name, percentage}) => {
            const id = `${name}-${percentage}`
            return <ListItem key={id} className={classes.item}>
                <ListItemAvatar>
                    <Avatar
                        alt={`image of ${name}`}
                        src={avatar}
                    />
                </ListItemAvatar>
                <ListItemText id={id} primary={name} />
                <ListItemSecondaryAction>
                    <Typography>{percentage}%</Typography>
                </ListItemSecondaryAction>
            </ListItem>
        })}
    </List></Card>;
};