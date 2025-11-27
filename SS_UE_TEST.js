/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], (record, log) => {
    const afterSubmit = (context) => {
        const get_record = context.newRecord;
        log.debug('get_record', `fetch:${get_record}`);

    }
    return {
        afterSubmit: afterSubmit
    }
})