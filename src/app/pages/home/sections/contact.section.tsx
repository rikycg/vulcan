'use client';

import { useState, useContext } from 'react';

import { TwoColumns } from '@/app/shared/layouts/two-columns.layout';
import { Button } from '../../../shared/ui/button.ui';
import { Input } from '@/app/shared/ui/input.ui';
import { Textarea } from '@/app/shared/ui/textarea.ui';
import { MailContext } from '@/app/pages/home/providers/mail.provider';
import { InfoContext } from '../providers/info.provider';

export function Contact() {
  const { mailService } = useContext(MailContext);
  const { profile } = useContext(InfoContext);
  
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  
  const onFormChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value, });
  };
  
  const sendEmail = () => {
    mailService.send({
      to: profile.email,
      from: profile.contactEmail,
      message: `Message from ${form.fullname} (${form.email}): ${form.message}`,
      subject: `Contact Sent from ${profile.website}`,
    });
  };

  return (
    <>
      <TwoColumns title='Contact' textColor='gray-dark' id='contact'>
        <div className='flex flex-col gap-5'>
          <p className='text-gray-light'>
            Have an exciting project you need help with?
          </p>
          <ul className='list-disc ml-2 text-gray-light'>
            <li>Send me a message</li>
            <li>{ `Let's work together and realize wonderful projects!` }</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <form onChange={onFormChange} >
            <div className='flex flex-col gap-3 items-end w-full'>
              <Input name='fullname' label='Name' />
              <Input name='email' label='Email' />
              <Textarea name='message' label='Message' />
              <Button text='Send' className='w-40' onClick={sendEmail} />
            </div>
          </form>
        </div>
      </TwoColumns>
    </>
  )
  return (<></>)
}