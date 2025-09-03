import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
  RadioGroup,
  Radio,
  FormLabel,
  Divider
} from '@mui/material';

export default function Form() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 900, mx: 'auto', mt: 4 }}>
      {/* Date, No, and Pages 1 of 2 fields - new section */}
        <Box sx={{    }}>  
             <Box sx={{ mb: 2,display:'flex',justifyContent:'center',alignItems:'center' }}>
          <Typography variant="h5" gutterBottom sx={{textTransform:'uppercase'}}>
        Request for Approval - Part/Manufacturer
      </Typography>
      </Box>
            <Box sx={{display:'flex',rowGap:0,mb:2,flexDirection:'column',width:'fit-content'}}>
              <p>Date: <input type="date" style={{ width: '110px', height: '32px', fontSize: '0.95rem', borderRadius: '6px', border: '1px solid #ccc', padding: '2px 8px' }} /></p>
              <p>No: <input type="number" style={{ width: '60px', height: '32px', fontSize: '0.95rem', borderRadius: '6px', border: '1px solid #ccc', padding: '2px 8px' }} /></p>
              <p>Pages: <span style={{ fontSize: '0.95rem' }}>1 of 2</span></p>
            </Box>

</Box>
<Divider sx={{ mb: 3 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} columns={3}>
          {/* Part/material, Material code, Part £, Material £ in one row - moved to top */}
          <FormControlLabel
                control={
                  <Controller
                    name="partCheckbox"
                    control={control}
                    render={({ field }) => <Checkbox {...field} />}
                  />
                }
                label="Part "
               
              />
              <FormControlLabel
                control={
                  <Controller
                    name="materialCheckbox"
                    control={control}
                    render={({ field }) => <Checkbox {...field} />}
                  />
                }
                label="Material"
                sx={{ ml: 2 }}
              />
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Controller
                name="partMaterial"
                control={control}
                render={({ field }) => (
                  <TextField label="Part/material" size="small" sx={{ minWidth: 120 }} {...field} />
                )}
              />
              <Controller
                name="materialCode"
                control={control}
                render={({ field }) => (
                  <TextField label="Material code" size="small" sx={{ minWidth: 120 }} {...field} />
                )}
              />
            </Box>
          </Grid>

          {/* Supplier Name and Supplier code */}
          <Grid item xs={1}>
            <Controller
              name="supplierCode"
              control={control}
              render={({ field }) => (
                <TextField label="Supplier code" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={1}>
            <Controller
              name="supplierName"
              control={control}
              render={({ field }) => (
                <TextField label="Supplier Name" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
        

          {/* Site, Prototype programme, Pre-launch, Type of Shipped Cargo */}
          <Grid item xs={1}>
            <Controller
              name="typeOfShippedCargo"
              control={control}
              render={({ field }) => (
                <TextField label="Type of Shipped Cargo" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
           
          <Grid item xs={1}>
            <FormControlLabel
              control={
                <Controller
                  name="preLaunch"
                  control={control}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label="Pre-launch"
            />
          </Grid>
          <Grid item xs={1}>
            <FormControlLabel
              control={
                <Controller
                  name="prototypeProgramme"
                  control={control}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label="Prototype programme"
            />
          </Grid>
           <Grid item xs={1}>
            <Controller
              name="site"
              control={control}
              render={({ field }) => (
                <TextField label="site" size="small" fullWidth {...field} />
              )}
            />
          </Grid>

          {/* Quantity, Bill of Lading No., Date Sent to Factory */}
           <Grid item xs={1}>
            <Controller
              name="dateSentToFactory"
              control={control}
              render={({ field }) => (
                <TextField label="Date Sent to Factory" size="small" fullWidth type="date" InputLabelProps={{ shrink: true }} {...field} />
              )}
            />
          </Grid>
          <Grid item xs={1}>
            <Controller
              name="billOfLadingNo"
              control={control}
              render={({ field }) => (
                <TextField label="Bill of Lading No." size="small" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={1}>
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <TextField label="Quantity" size="small" fullWidth type="number" {...field} />
              )}
            />
          </Grid>
          
           

         

          {/* Checkbox Group */}
          <Grid item xs={12}>
            <Typography  sx={{ fontWeight: 'bold' }} mt={1}>
              Reason for request
            </Typography>
            <FormGroup row>
              {[
                  'Material change',
                  'New supplier',
                'New part/material',
                'Approval expiry',
                'Change of design',
                'Production process change'
                
                 
              ].map((label, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Controller
                      name={label}
                      control={control}
                      render={({ field }) => <Checkbox {...field} />}
                    />
                  }
                  label={label}
                />
              ))}
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="productTechnicalName"
              control={control}
              render={({ field }) => (
                <TextField label="Product Technical Name" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <TextField label="Product Name" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
           <Grid item xs={12} sm={6}>
            <Controller
              name="productStage"
              control={control}
              render={({ field }) => (
                <TextField label="Product Stage" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
            <FormControlLabel
                control={
                  <Controller
                    name="massProduction"
                    control={control}
                    render={({ field }) => <Checkbox {...field} />}
                  />
                }
                label="Mass Production"
              />
 <FormControlLabel
                control={
                  <Controller
                    name="productDevelopmentProject"
                    control={control}
                    render={({ field }) => <Checkbox {...field} />}
                  />
                }
                label="Product Development Project"
              />
              <Grid item xs={12} sm={6}>
            <Controller
              name="dataSheetNumber"
              control={control}
              render={({ field }) => (
                <TextField label="Data Sheet Number" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="drawingNumber"
              control={control}
              render={({ field }) => (
                <TextField label="Drawing Number" size="small" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="manufacturerSelectionNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Manufacturer Selection Number"
                  size="small"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Approver & Requester Section - Two columns in one box */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 4, border: '1px solid #ccc', borderRadius: 2, p: 2, mt: 3 }}>
              {/* Requester (Left) */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Requester</Typography>
                <Controller
                  name="requesterName"
                  control={control}
                  render={({ field }) => (
                    <TextField label="Name and Surname" size="small" variant="standard" fullWidth sx={{ mb: 2 }} {...field} />
                  )}
                />
                <Controller
                  name="requesterPosition"
                  control={control}
                  render={({ field }) => (
                    <TextField label="Position" size="small" variant="standard" fullWidth sx={{ mb: 2 }} {...field} />
                  )}
                />
                <Controller
                  name="requesterDateSignature"
                  control={control}
                  render={({ field }) => (
                    <TextField label="Date and Signature" size="small" variant="standard" fullWidth sx={{ mb: 2 }} {...field} />
                  )}
                />
              </Box>
              {/* Approver (Right) */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Approver</Typography>
                <Controller
                  name="approverName"
                  control={control}
                  render={({ field }) => (
                    <TextField label="Name and Surname" size="small" variant="standard" fullWidth sx={{ mb: 2 }} {...field} />
                  )}
                />
                <Controller
                  name="approverPosition"
                  control={control}
                  render={({ field }) => (
                    <TextField label="Position" size="small" variant="standard" fullWidth sx={{ mb: 2 }} {...field} />
                  )}
                />
                <Controller
                  name="approverDateSignature"
                  control={control}
                  render={({ field }) => (
                    <TextField label="Date and Signature" size="small" variant="standard" fullWidth sx={{ mb: 2 }} {...field} />
                  )}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box textAlign="right" mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit Form
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
