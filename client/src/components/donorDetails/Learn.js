import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';


class Learn extends Component {
    render() {


        return (
            <div >
                <h2>The Deceased Donation Process</h2>
                <Card>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Medical Care of Potential Donors
                    </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>

                                    For someone to become a deceased donor, he or she has to die in very specific circumstances. Most often, a patient comes to a hospital because of illness or accident, such as a severe head trauma, a brain aneurysm or stroke.

                                    The patient is put on artificial or mechanical support, which keeps blood with oxygen flowing to the organs. The medical team does everything possible to save the patient's life. At this point, whether or not the person is a registered donor is not considered.
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Brain Death Testing
                     </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Even though the medical team members do everything they can to save the patient's life, sometimes the injuries are too severe and the patient dies.

                                    If the patient is dead and is not responding, physicians will perform a series of tests to determine if brain death has occurred. A patient who is brain dead has no brain activity and cannot breathe on his or her own. Brain death is death and it is irreversible. Someone who is brain dead cannot recover.

                                    Only after brain death has been confirmed and the time of death noted, can organ donation become a possibility.
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                The Organ Procurement Organization
                     </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    The hospital notifies the local Organ Procurement Organization (OPO) of every patient that has died or is nearing death. This is in keeping with federal regulations.

                                    The hospital gives the OPO information about the deceased patient to confirm whether he or she has the potential to be a donor. If the person could be a candidate for donation, a representative from the OPO travels immediately to the hospital.
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                Authorizing Donation
                     </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    The OPO representative searches to see if the deceased is registered as a donor on their state registry. If so, that will serve as legal consent for donation.

                                    If the deceased has not registered, and there was no other legal consent for donation, such as a notation on the driver's license, the OPO will ask the next of kin for authorization.

                                    After authorization, a medical evaluation takes place, including obtaining the deceased's complete medical and social history from the family.
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                The Matching Process
                     </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    If the deceased person's evaluation allows donation, the OPO contacts the Organ Procurement and Transplantation Network (OPTN).

                                    The OPTN operates the national database of all patients in the U.S. waiting for a transplant. The OPO enters information about the deceased donor into the computer system and the search begins.

                                    The computer system generates a list of patients who match the donor (by organ). Each available organ is offered to the transplant team of the best-matched patient.

                                    The transplant surgeon determines whether the organ is medically suitable for that patient or may refuse the organ—for example, if the patient is too sick to be transplanted or cannot be reached in time.

                                    Most organs go to patients in the area where the organs were recovered. The others are shared with patients in other regions of the country.
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                                Recovering and Transporting Organs
                     </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    While the search for matching recipients is under way, the deceased donor's organs are maintained on artificial support. Machines keep blood containing oxygen flowing to the organs. The condition of each organ is carefully monitored by the hospital medical staff and the OPO procurement coordinator.

                                    A transplant surgical team replaces the medical team that treated the patient before death. (The medical team trying to save the patient’s life and the transplant team are never the same team.)

                                    The surgical team removes the organs and tissues from the donor's body in an operating room. First, organs are recovered, and then additional authorized tissues such as bone, cornea, and skin. All incisions are surgically closed. Organ donation does not interfere with open-casket funerals.

                                    Organs remain healthy only for a short period of time after removal from the donor, so minutes count. The OPO representative arranges the transportation of the organs to the hospitals of the intended recipients. Transportation depends on the distance involved, and can include ambulances, helicopters, and commercial airplanes.
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="6">
                                Transplanting the Organs
                     </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    The transplant operation takes place after the transport team arrives at the hospital with the new organ. The transplant recipient is typically waiting at the hospital and may already be in the operating room awaiting the arrival of the lifesaving organ.

                                    Surgical teams work around the clock as needed to transplant the new organs into the waiting recipients.
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card>
            </div>
        );
    }
}

export default Learn;
