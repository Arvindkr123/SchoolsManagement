import {createContext, useContext, useState} from 'react'
import axios from 'axios'
import {useQueryClient, useMutation} from 'react-query'
import {useAuth} from './Auth'

const AdmissionContext = createContext()

export const AdmissionContextProvider = ({children}) => {
  const queryClient = useQueryClient()
  const {auth} = useAuth()
  const [admissionFormData, setAdmissionFormData] = useState([])
  let config = {
    headers: {
      Authorization: `Bearer ${auth.api_token}`,
    },
  }

  const {mutate, isLoading, isSuccess, isError, error, data} = useMutation({
    mutationFn: async (newAdmission) => {
      return axios
        .post('http://localhost:8080/api/addmission_form', newAdmission, config)
        .then((res) => res.data)
    },
    onError: (err) => {
      alert('Addmission already done with this email')
      console.error('Error creating admission form:', err)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['admissionForms']})
      alert('Addmission done successfully!')
    },
  })

  console.log(error, data)

  const createAdmissionForm = async (formData) => {
    try {
      await axios.post('http://localhost:8080/api/addmission_form', formData, config)
      // Invalidate and refetch the admission forms query
      queryClient.invalidateQueries('admissionForms')
    } catch (error) {
      console.error('Error creating admission form:', error)
    }
  }

  return (
    <AdmissionContext.Provider
      value={{
        admissionFormData,
        createAdmissionForm,
        setAdmissionFormData,
        mutate,
        isLoading,
        isSuccess,
        isError,
      }}
    >
      {children}
    </AdmissionContext.Provider>
  )
}

export const useAdmissionContext = () => {
  const context = useContext(AdmissionContext)
  if (!context) {
    throw new Error('useAdmissionContext must be used within an AdmissionContextProvider')
  }
  return context
}
