import {createContext, useContext, useState} from 'react'
import axios from 'axios'
import {useQueryClient, useMutation, useQuery} from 'react-query'
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

  const studentsLists = useQuery({
    queryKey: ['AddStudent'],
    queryFn: async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students', config)
        return response.data
      } catch (error) {
        throw new Error('Error fetching student data: ' + error.message)
      }
    },
  })

  //console.log(studentsLists)
  const {mutate, isLoading, isSuccess, isError, error} = useMutation({
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
      queryClient.invalidateQueries({queryKey: ['AddStudent']})
      alert('Addmission done successfully!')
    },
  })

  return (
    <AdmissionContext.Provider
      value={{
        admissionFormData,
        setAdmissionFormData,
        mutate,
        isLoading,
        isSuccess,
        isError,
        studentsLists,
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
