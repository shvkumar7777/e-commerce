import React, {useState} from 'react';
import { } from '@material-ui/icons';
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'


import useStyles from './Styles'
import { Typography,Paper,Step, StepLabel, Stepper } from '@material-ui/core';

const steps = ['shipping address', 'payment details'];
const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const styles = useStyles();

    const Confirmation = () => (
        <div> confirmation </div>
    )
    const Form = () => activeStep === 0 ?
        <AddressForm /> :
        <PaymentForm/>

    return (
        <>
        <div className={styles.toolbar}>
            <main className={styles.layout}>
                <Paper className={styles.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                        <Stepper activeStep={activeStep} className={styles.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation/> :<Form/>}
                </Paper>
            </main>
        </div>
        </>
    );
};

export default Checkout;
