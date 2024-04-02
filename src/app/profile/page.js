"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import UserForm from '../components/layout/UserForm';
import UserTabs from '../components/layout/UserTabs';
import toast from 'react-hot-toast';

export default function ProfilePage() {

  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [profileFetched, setProfileFetched] = useState(false);



  useEffect(() => {
    if (status === 'authenticated') {

      fetch('/api/profile').then(res => {
        if (res.ok) {
          res.json().then(data => {
            setUser(data);
            setProfileFetched(true)
          })
        }
      })
    }
  }, [status])


  async function handleSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      if (response.ok)
        resolve()
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile saved!',
      error: 'Error',
    });



  }




  console.log(user);

  if (status === 'loading' || !profileFetched) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <section className="mt-8">
      <UserTabs />
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={handleSubmit} />
      </div>

    </section>

  )
}
