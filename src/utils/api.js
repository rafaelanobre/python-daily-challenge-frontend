import { useAuth } from '@clerk/clerk-react'

const BASE_URL = import.meta.env.BACKEND_URL || 'http://localhost:8000';

export const useApi = () => {
    const { getToken } = useAuth()

    const makeRequest = async (endpoint, options = {}) => {
        const token = await getToken()
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        
        const response = await fetch(`${BASE_URL}/api/${endpoint}`, {
            ...defaultOptions,
            ...options,
        })

        if (!response.ok) {
            const errorData = await response.json().catch(() => null)
            if (response.status === 429) {
                throw new Error('Daily quota exceeded.')
            }
            throw new Error(errorData?.detail || 'An error occurred while processing your request.')
        }

        return response.json()
    }

    return { makeRequest }
}