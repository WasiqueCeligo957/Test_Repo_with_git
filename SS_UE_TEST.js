/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], (record, log) => {
    const afterSubmit = (context) => {
        const get_record = context.newRecord;
        const record_type=get_record.type;
        log.debug('get_record', `record-:${get_record}`);
        log.debug('record type', `${record_type}`);

    }
    return {
        afterSubmit: afterSubmit
    }
})