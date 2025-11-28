/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], (record, log) => {
    //add button on record in view mode
    const beforeLoad = (context) => {
        try {
            if (context.type === context.Type.UserEventType.VIEW) {
                const form = context.form;
                form.addButton({
                    id: 'custpage_cust_bttn',
                    label: 'click to send',
                    functionname: 'myfunction'
                });
                //add client script to controll the button
                form.clientScriptModulePath = 'SuiteScripts/cleint_script_file_id';

            }
        } catch (error) {
            log.debug('capture error message', `${error.message}`);
        }
    }
    //aftersubmit function to do some activity
    const afterSubmit = (context) => {
        const get_record = context.newRecord;
        const record_type = get_record.type;
        log.debug('get_record', `record-:${get_record}`);
        log.debug('record type', `${record_type}`);


    }
    return {
        beforeLoad,
        afterSubmit
    }
})
