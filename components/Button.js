import React from 'react'
import { Button } from 'semantic-ui-react'

const ExampleButton = (props) => <Button 
                                    loading={props.loading} 
                                    content={props.text} 
                                    icon="add circle" 
                                    primary 
                                    floated={props.floated ? props.floated : "right"}>
                                
                                </Button>

export default ExampleButton