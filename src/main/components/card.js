import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Informações sorteio
        </Typography>
        <Typography variant="h5" component="h2">
          DOS - amazon exclusive
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Descrição
        </Typography>
        <Typography variant="body2" component="p">
            O prêmio da rifa será o jogo DOS, com embalagem de alumínio exclusiva do site da Amazon.
        </Typography>
        <Typography variant="body2" component="p">Valor unidade: R$ 4,00</Typography>
        <Typography variant="body2" component="p">Combo de 3 rifas: R$ 10,00</Typography>
        <Typography variant="body2" component="p">Data do sorteio: 01 de Agosto de 2019</Typography>
      </CardContent>
    </Card>
  );
}