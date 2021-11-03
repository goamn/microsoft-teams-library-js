import { mail } from '@microsoft/teams-js';
import React, { ReactElement } from 'react';

import { noHostSdkMsg } from '../App';
import BoxAndButton from './BoxAndButton';

const MailAPIs = (): ReactElement => {
  const [composeMailRes, setComposeMailRes] = React.useState('');
  const [openMailItemRes, setOpenMailItemRes] = React.useState('');
  const [mailCapabilityCheckRes, setMailCapabilityCheckRes] = React.useState('');

  const composeMail = (mailParams: string): void => {
    setComposeMailRes('mail.composeMail()' + noHostSdkMsg);
    mail
      .composeMail(JSON.parse(mailParams))
      .then(() => setComposeMailRes('Completed'))
      .catch(reason => setComposeMailRes(reason));
  };

  const openMailItem = (mailParams: string): void => {
    setOpenMailItemRes('mail.openMailItem()' + noHostSdkMsg);
    mail
      .openMailItem(JSON.parse(mailParams))
      .then(() => setOpenMailItemRes('Completed'))
      .catch(reason => setOpenMailItemRes(reason));
  };

  const mailCapabilityCheck = (): void => {
    if (mail.isSupported()) {
      setMailCapabilityCheckRes('Mail module is supported');
    } else {
      setMailCapabilityCheckRes('Mail module is not supported');
    }
  };

  return (
    <>
      <h1>mail</h1>
      <BoxAndButton
        handleClickWithInput={composeMail}
        output={composeMailRes}
        hasInput={true}
        title="Compose Mail"
        name="composeMail"
      />
      <BoxAndButton
        handleClickWithInput={openMailItem}
        output={openMailItemRes}
        hasInput={true}
        title="Open Mail Item"
        name="openMailItem"
      />
      <BoxAndButton
        handleClick={mailCapabilityCheck}
        output={mailCapabilityCheckRes}
        hasInput={false}
        title="Check Capability Mail"
        name="checkCapabilityMail"
      />
    </>
  );
};

export default MailAPIs;