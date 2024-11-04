"use client"
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import { Calendar } from "@/components/ui/calendar"
export function RecentSales() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (<>
    <div className='space-y-8'>
    
      <div className='flex items-center'>
        <Avatar className='h-9 w-9 border border-white '>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none '>Olivia Martin</p>
          <p className='text-sm text-muted-foreground'>
            olivia.martin@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>Case Ref: OM12345</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Jackson Lee</p>
          <p className='text-sm text-muted-foreground'>jackson.lee@email.com</p>
        </div>
        <div className='ml-auto font-medium'>Case Ref: JL67890</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9 border border-white'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Isabella Nguyen</p>
          <p className='text-sm text-muted-foreground'>
            isabella.nguyen@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>Case Ref: IN11223</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9 border border-white'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>William Kim</p>
          <p className='text-sm text-muted-foreground'>will@email.com</p>
        </div>
        <div className='ml-auto font-medium'>Case Ref: AC11223</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9 border border-white
        ?'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Sofia Davis</p>
          <p className='text-sm text-muted-foreground'>sofia.davis@email.com</p>
        </div>
        <div className='ml-auto font-medium'>Case Ref: CDE1223</div>
      </div>
    </div>
    
  </>
  )
}