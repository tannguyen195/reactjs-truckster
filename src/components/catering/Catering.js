
import React, { Component } from 'react';
import { Modal, Button, Progress, Form, Icon, Tooltip, Rate } from 'antd';
import { Link } from 'routes'
import Catering1 from './Catering1'
import Catering2 from './Catering2'
import Catering3 from './Catering3'
import Catering4 from './Catering4'
import Catering5 from './Catering5'
import Catering6 from './Catering6'
import Catering7 from './Catering7'
import Catering8 from './Catering8'

const shareIcon = '/static/images/share-icon.png'

export default class extends Component {
    renderCateringStep(step) {
        switch (step) {
            case 1: return <Catering1 {...this.props} />;
            case 2: return <Catering2 {...this.props} />;
            case 3: return <Catering3 {...this.props} />;
            case 4: return <Catering4 {...this.props} />;
            case 5: return <Catering5 {...this.props} />;
            case 6: return <Catering6 {...this.props} />;
            case 7: return <Catering7 {...this.props} />;
            case 8: return <Catering8 {...this.props} />;

            default: return <Catering1 {...this.props} />;
        }
    }

    render() {
        const { step, visibleCatering, toggleCateringModal, previousStep, handleSubmit,
            isLoggedIn, favorite, onFavoriteChange, toggleShareModal,
            handleSubmitForm
        } = this.props

        return (
            <div className="catering-container">
                <div className="catering-book">
                    <div>
                        <div className="catering-title">
                            <div>
                                Book This Truck
                            </div>
                         
                        </div>
                        <div className="catering-desc">Want a food truck to cater your next event? Truckster makes it easy, just click below to get started.</div>
                        <Button onClick={toggleCateringModal} type="primary">SUBMIT CATERING REQUEST</Button>
                    </div>

                </div>


                <Modal
                    wrapClassName="catering-modal-container"
                    width={480}
                    onCancel={toggleCateringModal}
                    footer={null}
                    visible={visibleCatering}>

                    <Form onSubmit={handleSubmit} className="catering-modal">
                        <div className="progress-container">

                            <Progress strokeColor="#fa393d" percent={step / 8 * 100} showInfo={false} />
                        </div>
                        <div className="catering-header">
                            <div style={{ paddingLeft: (step * 50).toString() + "px" }}
                                className="LabelBlackCenter step-stage">{step}/8</div>
                        </div>

                        <div className="catering-body">

                            {
                                this.renderCateringStep(step)
                            }

                        </div>
                        <div style={{ justifyContent: step === 1 && "flex-end" }} className="catering-footer">
                            {
                                step !== 1 && <Button onClick={previousStep} >BACK</Button>
                            }

                            {
                                step < 8 ? <Button htmlType="submit" type="primary">NEXT</Button>
                                    : <Button onClick={handleSubmitForm} style={{ width: 200 }} type="primary">SUBMIT</Button>
                            }

                        </div>
                    </Form>
                </Modal>
            </div>
        )


    }
}
