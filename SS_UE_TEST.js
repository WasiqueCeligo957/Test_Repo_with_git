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
        const record_id = get_record.id;
        log.debug('get_record', `record-:${get_record}`);
        log.debug('record type', `${record_type}`);
        log.debug('record type', `${record_id}`);
        const load_record = record.load({
            type: 'record_type',
            id: record_id
        });
        log.debug('record loaded', `${load_record}`);
        const get_cus_id = load_record.getvalue({
            fieldid: 'entity'
        });
        log.debug('customer id', `${get_cus_id}`);

    }
    return {
        beforeLoad,
        afterSubmit
    }
})
