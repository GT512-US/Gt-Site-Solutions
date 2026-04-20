
'use client';

import { Button } from './button';

export function ContactForm() {
  return (
    <form className="max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-white/70">
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="py-3 px-4 block w-full shadow-sm bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-white/70">
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="py-3 px-4 block w-full shadow-sm bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-white/70">
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="py-3 px-4 block w-full shadow-sm bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-white/70">
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="py-3 px-4 block w-full shadow-sm bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
              defaultValue={''}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}
