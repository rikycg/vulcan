'use client';

import { useState, useContext } from 'react';

import { TwoColumns } from '@/app/shared/layouts/two-columns.layout';
import { Input } from '@/app/shared/ui/input.ui';
import { Textarea } from '@/app/shared/ui/textarea.ui';
import { InfoContext } from '../providers/info.provider';
import { Button } from '../../../shared/ui/button.ui';

import { MessageContext } from '../providers/message.provider';

export function Contact() {
  const { messageService } = useContext(MessageContext);
  const { profile } = useContext(InfoContext);
  
  const [hasSent, setHasSent] = useState(false);
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  
  const onFormChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value, });
  };
  
  const sendEmail = async () => {
    await messageService.sendMessage(
      profile.contactEmail,
      profile.email,
      `Message from ${form.fullname} (${form.email}): ${form.message}`,
      `Contact Sent from ${profile.website}`,
    );

    setForm({ fullname: '', email: '', message: '' });
    setHasSent(true);
    setTimeout(() => setHasSent(false), 3000);
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
              <Input name='fullname' label='Name' value={form.fullname} />
              <Input name='email' label='Email' value={form.email} />
              <Textarea name='message' label='Message' value={form.message} />
              
              <div className="flex items-center w-full">
                { hasSent && <span className='text-warning text-[12px]'>Message sent!</span> }
                <Button text='Send' className='w-40 ml-auto' onClick={sendEmail} />
              </div>
            </div>
          </form>
        </div>
      </TwoColumns>
    </>
  )
  return (<></>)
}