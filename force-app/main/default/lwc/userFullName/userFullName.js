import { LightningElement } from 'lwc';

export default class UserFullName extends LightningElement {
    firstName = '';
    lastName = '';
    isShowFlow = false;
    flowVariables = [];

    handleGetFullName() {
        const firstNameInput = this.template.querySelector('lightning-input[data-name="firstName"]');
        const lastNameInput = this.template.querySelector('lightning-input[data-name="lastName"]');

        this.firstName = firstNameInput.value;
        this.lastName = lastNameInput.value;

        this.flowVariables = [
            {
                name: 'firstName',
                type: 'String',
                value: this.firstName
            },
            {
                name: 'lastName',
                type: 'String',
                value: this.lastName
            }
        ];
        
        // Show the flow with the full name
        this.isShowFlow = true;
    }

    handleFlowStatusChange(event) {
        if (event.detail.status === 'FINISHED') {
            // Reset the flow visibility after it finishes
            this.isShowFlow = false;
            this.template.querySelector('lightning-input[data-name="firstName"]').value = '';
            this.template.querySelector('lightning-input[data-name="lastName"]').value = '';
        }
    }
}