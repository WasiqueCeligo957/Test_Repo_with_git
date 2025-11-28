/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], (record, log) => {
    //aftersubmit function to do some activity
    const afterSubmit = (context) => {
        const get_record = context.newRecord;
        const record_type = get_record.type;
        const record_id = get_record.id;
        log.debug('get_record', `record-:${get_record}`);
        log.debug('record type', `${record_type}`);
        log.debug('record id', `${record_id}`);
        const load_record = get_record.load({
            type: 'record_type',
            id: record_type
        });
        log.debug('record loaded', `${load_record}`);
        const customer = load_record.getvalue({
            fieldId: 'entity',
        });
        log.debug('customer id', `${customer}`);

    }
    return {
        afterSubmit
    }
})
