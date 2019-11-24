import React, {Component, createRef} from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "emailjs-com";
import {objectEmpty} from "../../helpers";
import loader from "../../assets/img/loader.svg";
import {PrimaryButton} from "./Button";

const formErrors = {
    name: 'Full Name must be 5 characters long!',
    email: 'Email is not valid!',
    message: 'Password must be 8 characters long!',
};

const formConfig = {
    nameMinLength: 3,
    nameMaxLength: 50,
    messageMinLength: 10,
    messageMaxLength: 500,
};

const emailStatuses = {
    onLoad: 0,
    sending: 1,
    sendSuccess: 2,
    sendFailure: 3
};

const emailStatusMessages = {
    sending: '<div style={{color: "red"}}>sending</div>',
    sendSuccess: 'Email sent successfuly',
    sendFailure: 'Sending email failed'
};

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        errors: {
            name: formErrors.name,
            email: formErrors.email,
            message: formErrors.message,
        },
        emailStatus: emailStatuses.onLoad
    };

    formRef = createRef();

    render() {
        const {name, email, message, emailStatus} = this.state;
        return (
            <Form ref={this.formRef}>
                <StyledRow>
                    <StyledCol lg={6}>
                        <InputWrapper>
                            <StyledInput
                                name={'name'}
                                type={'text'}
                                placeholder={'Name'}
                                onChange={this.handleChange}
                                value={name}
                                required
                                minLength={formConfig.nameMinLength}
                                maxLength={formConfig.nameMaxLength}
                            />
                        </InputWrapper>
                    </StyledCol>
                    <StyledCol lg={6}>
                        <InputWrapper>
                            <StyledInput
                                name={'email'}
                                type={'email'}
                                placeholder={'Email'}
                                onChange={this.handleChange}
                                value={email}
                                required
                            />
                        </InputWrapper>
                    </StyledCol>
                    <StyledCol lg={12}>
                        <InputWrapper>
                            <StyledTextarea
                                name={'message'}
                                placeholder={'Message'}
                                onChange={this.handleChange}
                                value={message}
                                required
                                minLength={formConfig.messageMinLength}
                                maxLength={formConfig.messageMaxLength}
                            />
                        </InputWrapper>
                    </StyledCol>
                    <StyledCol lg={12}>
                        <EmailStatusWrapper emailStatus={emailStatus}/>
                        <PrimaryButton type="button" value="Submit" onClick={this.handleSubmit}>
                            Send
                        </PrimaryButton>
                    </StyledCol>
                </StyledRow>
            </Form>
        );
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.stateFormErrors(event);
        this.setState({[name]: value});
    };


    handleSubmit = () => {
        const {name, email, message, errors} = this.state;
        const html5Valid = this.formRef.current.reportValidity();

        if (objectEmpty(errors) && html5Valid) {
            this.setState({emailStatus: emailStatuses.sending});

            this.sendEmail({
                message_html: message,
                from_name: name,
                reply_to: email
            })
        }

    };

    validEmailRegex =
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


    stateFormErrors = (event) => {
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name =
                    (value.length < formConfig.nameMinLength || value.length > formConfig.nameMaxLength)
                        ? formErrors.name
                        : '';
                break;
            case 'email':
                errors.email =
                    this.validEmailRegex.test(value)
                        ? ''
                        : formErrors.email;
                break;
            case 'message':
                errors.message =
                    value.length < formConfig.messageMinLength || value.length > formConfig.messageMaxLength
                        ? formErrors.message
                        : '';
                break;
            default:
                break;
        }
        this.setState({errors});
    };


    sendEmail = (variables) => {
        emailjs.init(process.env.REACT_APP_EMAILJS_USER);
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            variables
        ).then(res => {
            this.onSendSuccess();
        }).catch(err => {
            this.onSendFailure(err);
        })
    };

    onSendSuccess = () => {
        this.setState({emailStatus: emailStatuses.sendSuccess});
    };

    onSendFailure = (err) => {
        this.setState({emailStatus: emailStatuses.sendFailure});
    };


}

const EmailStatusWrapper = ({emailStatus}) => {
    console.log(emailStatus);
    console.log(emailStatuses.sending);
    return (
        <EmailStatus emailStatus={emailStatus}>
                {emailStatus === emailStatuses.sending &&
                <React.Fragment>
                    <img src={loader} alt={'loader'} height={'100%'}/>
                </React.Fragment>
                }
                {emailStatus === emailStatuses.sendSuccess &&
                <React.Fragment>
                    {emailStatusMessages.sendSuccess}
                </React.Fragment>
                }
                {emailStatus === emailStatuses.sendFailure &&
                <React.Fragment>
                    {emailStatusMessages.sendFailure}
                </React.Fragment>
                }
        </EmailStatus>
    );
};

export default ContactForm;

const Form = styled.form`
    width: 100%;
    background-color: ${props => props.theme.mainSecondColor};
    box-shadow: ${props => props.theme.mainShadow};
`;

const StyledRow = styled(Row)`
    padding: 2em;
`;

const StyledCol = styled(Col)`
    padding: 0 !important;
`;

const InputWrapper = styled.div`
    padding: 1em;
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
      padding: 0.7em 1em;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 4em;
    padding-left: 1em;
    border: solid 4px ${props => props.theme.mainColor};
    color: ${props => props.theme.placeholderColor};
    
    &:focus:required:invalid {
      border: solid 4px ${props => props.theme.invalidColor};
    }
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    height: 10em;
    padding: 1em;
    border: solid 4px ${props => props.theme.mainColor};
    color: ${props => props.theme.placeholderColor};
    
    &:focus:required:invalid {
      border: solid 4px ${props => props.theme.invalidColor};
    }
`;

const EmailStatus = styled.p`
    height: ${props => props.emailStatus === 0 ? '0' : '25px'};
    color: white;
    overflow: hidden;
    transition: height 500ms;
`;


