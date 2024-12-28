import ChooseOurIPTVReseller from '@/pages/reseller/ChooseOurIPTVReseller'
import Header from '@/pages/reseller/Header'
import HeaderBottom from '@/pages/reseller/HeaderBottom'
import IPTVBusiness from '@/pages/reseller/IPTVBusiness'
import ResellerPlan from '@/pages/reseller/ResellerPlan'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <HeaderBottom/>
      <ChooseOurIPTVReseller/>
      <IPTVBusiness/>
      <ResellerPlan/>
    </>
  )
}

export default page
