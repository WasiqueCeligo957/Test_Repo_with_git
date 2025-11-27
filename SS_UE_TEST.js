/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], (record, log) => {
    const afterSubmit = (context) => {
        const record = context.newRecord;
        log.debug(`Track the record details`, $(record));

    }
    return {
        afterSubmit: afterSubmit
    }
})