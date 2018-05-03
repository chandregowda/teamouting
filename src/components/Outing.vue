<template>
  <div class="container-fluid">
    <!-- <app-process-filters></app-process-filters> -->
    <b-row>
      <b-col >
          <h3 class="mt-3 text-info"><font-awesome-icon class="mr-3 text-primary" size="lg" icon="space-shuttle" title="RSVP Details"/>
            RSVP for 18th May (Friday), 2018 Outing
          </h3>
      </b-col>
      <b-col class="text-right">
        <!-- <b-link href="https://goo.gl/maps/VppGpwSQjZm" target="__blank"> <font-awesome-icon class="mr-1 text-primary" size="lg" icon="map-marker" title="Route Map"/> Route</b-link> -->
        <b-link href="https://goo.gl/maps/gUYkaAQjEAw" target="__blank"> <font-awesome-icon class="mr-1 text-danger" size="lg" icon="map-marker" title="Route Map"/> View Route Map</b-link>
        <b-btn class="m-1" variant="outline-info" @click="modalShow=true" >
          <font-awesome-icon class="mr-1" size="lg" icon="pencil-alt" title="RSVP Details"/> Confirm RSVP for 18th May, 2018
        </b-btn>
      </b-col>
    </b-row>
    <hr>
      <h4 v-if="myData" class="text-center display-6">I'm {{myData.attending? '' : 'NOT' }} attending outing, my contact number '{{myData.contactNumber}}' and pickup point is '{{myData.pickupPoint}}'</h4>
      <b-form @submit="onSubmit" >
        <b-modal ref="myModalRef" hide-footer id="modal1" title="Your Details" v-model="modalShow">
          <p class="text-center">The Windflower Prakruthi Resort, Bengaluru</p>
          <p class="text-center">
            Friday 18th May, 2018
            <br>
            <b-link href="https://goo.gl/maps/gUYkaAQjEAw" target="__blank"> <font-awesome-icon class="mr-1 text-danger" size="lg" icon="map-marker" title="Route Map"/> View Route Map</b-link>
          </p>
          <div class="p-1">
            <div class="row mb-3">
                <b-col sm="4" class="legend-small">Attending Outing</b-col>
                <b-col >
                    <b-form-radio-group id="attending" v-model="formFields.attending" name="radioSubComponent">
                    <b-form-radio value="true">Yes</b-form-radio>
                    <b-form-radio value="false">No</b-form-radio>
                    </b-form-radio-group>
                </b-col>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <b-form-group>
                        <b-form-text class="legend-small">Contact number</b-form-text>
                        <b-form-input v-model.trim="formFields.contactNumber" type="number" required size="sm" pattern="[7|8|9][0-9]{9}" placeholder="Mobile Number" />
                    </b-form-group>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <b-form-group>
                        <b-form-text class="legend-small">Pickup Point (Office or On the way)</b-form-text>
                        <b-form-input v-model.trim="formFields.pickupPoint" type="text" size="sm" placeholder="Pickup Point" />
                        <h6 class="mt-1"><small class="text-danger hint">Leave blank if you are coming on your own</small></h6>
                    </b-form-group>
                </div>
            </div>
          </div>
            <b-btn class="mt-3" variant="outline-info" block type="submit" :disabled="isLoading">
                <template v-if="isLoading">
                    <font-awesome-icon icon="spinner" spin /> Submiting Updates
                </template>
                <template v-else>
                    <font-awesome-icon icon="thumbs-up" /> ADD / UPDATE
                </template>
            </b-btn>
        </b-modal>
      </b-form>
    <hr>
    <!-- <section>
      <b-modal ref="mapRef" hide-footer id="mapContainer" title="Yodlee to Windflower Resort" v-model="showMap" size="lg">
        <section class="text-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d124358.02972703397!2d77.58132736257122!3d13.087241469827498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae13b3df5a8857%3A0xddf5dccef477a404!2zWW9kbGVlIEluZm90ZWNoIFByaXZhdGUgTGltaXRlZCwgMXN0IEZsb29yLCBNZXJjdXJ5ICgyQikgQmxvY2ssIFByZXN0aWdlIFRlY2hub2xvZ3kgUGFyaywgU2FyamFwdXJhLU1hcmF0aGFoYWxsaSBSaW5nIFJvYWQsIFZhcnRodXIgSG9ibGksIEthZHViZWVzYW5haGFsbGkgQmFuZ2Fsb3JlLCBLYXJuYXRha2EgNTYwMTAzLCBLb2RiaXNhbmhhbGxpLCDgspXgsr7gsqHgs4Hgsqzgsr_gsrjgsqjgsrngsrPgs43gsrPgsr8sIEthZGFiZWVzYW5haGFsbGksIEthcm5hdGFrYSA1NjAxMDMsIEluZGlh!3m2!1d12.9420293!2d77.6938484!4m5!1s0x3bae1e52c5bf9ccb%3A0x7012e39c795b7143!2sWindflower+Prakruthi+Resort+%26+Spa%2C+Plot+No.12A%2C+Kundana+Hobli%2C+Devanahalli+Taluk%2C+Bangalore+Dist%2C+Hegganhalli%2C+Karnataka+562110!3m2!1d13.203244!2d77.60969!5e0!3m2!1sen!2sin!4v1525344951646" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
      </b-modal>
    </section> -->
    <b-row align-h="center">
      <b-col align-self="center" cols="10">
        <b-form inline>
            <font-awesome-icon icon="filter" class="mr-2 text-warning"/>
            <!-- <b-form-input class="mr-2" v-model="filters.accountName" type="text" size="sm" placeholder="By LOGIN ID" /> -->
            <b-form-input class="mr-2" v-model="filters.displayName" type="text" size="sm" placeholder="By DISPLAY NAME" />
            <b-form-input class="mr-2" v-model="filters.pickupPoint" type="text" size="sm" placeholder="By PICKUP POINT" />
            <!-- <b-button class="m-1" variant="outline-info" @click="refresh" >
              <font-awesome-icon class="mr-1 text-primary" size="lg" icon="sync-alt" variant="link" title="Refresh"/>
            </b-button> -->

            <b-button size="lg" class="ml-1" variant="link" @click="refresh" v-b-popover.hover="'Refresh details'" >
              <!-- <font-awesome-icon icon="spinner" spin v-if="isLoading" />  -->
              <font-awesome-icon icon="sync-alt"/>
            </b-button>

            <!-- <b-btn class="m-1" variant="link" @click="showMap=true">
                <font-awesome-icon class="mr-1 text-primary" size="lg" icon="map-marker" title="Route Map"/> Route Map
            </b-btn> -->
            <!-- <b-link href="https://goo.gl/maps/4RWfK2cxp9U2" target="__blank"> <font-awesome-icon class="mr-1 text-primary" size="lg" icon="map-marker" title="Route Map"/> Route</b-link> -->
        </b-form>
        <h6>*<small class="text-muted hint">Filters work with regular expression, Ex: "Cha|Mee" in LOGIN ID will find both Chandre and Meenakshi</small></h6>
      </b-col>
    </b-row>
    <br/>
    <b-row align-h="center">
        <b-col align-self="center" cols="10">
            <b-table
                show-empty
                striped
                bordered
                small
                hover
                head-variant="light"
                :items="filteredDetails"
                :fields="fields">

                <template slot="index" slot-scope="data">
                    {{data.index + 1}}
                </template>
            </b-table>
        </b-col>
    </b-row>
    <!-- <section>
        <section class="text-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d124358.02972703397!2d77.58132736257122!3d13.087241469827498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae13b3df5a8857%3A0xddf5dccef477a404!2zWW9kbGVlIEluZm90ZWNoIFByaXZhdGUgTGltaXRlZCwgMXN0IEZsb29yLCBNZXJjdXJ5ICgyQikgQmxvY2ssIFByZXN0aWdlIFRlY2hub2xvZ3kgUGFyaywgU2FyamFwdXJhLU1hcmF0aGFoYWxsaSBSaW5nIFJvYWQsIFZhcnRodXIgSG9ibGksIEthZHViZWVzYW5haGFsbGkgQmFuZ2Fsb3JlLCBLYXJuYXRha2EgNTYwMTAzLCBLb2RiaXNhbmhhbGxpLCDgspXgsr7gsqHgs4Hgsqzgsr_gsrjgsqjgsrngsrPgs43gsrPgsr8sIEthZGFiZWVzYW5haGFsbGksIEthcm5hdGFrYSA1NjAxMDMsIEluZGlh!3m2!1d12.9420293!2d77.6938484!4m5!1s0x3bae1e52c5bf9ccb%3A0x7012e39c795b7143!2sWindflower+Prakruthi+Resort+%26+Spa%2C+Plot+No.12A%2C+Kundana+Hobli%2C+Devanahalli+Taluk%2C+Bangalore+Dist%2C+Hegganhalli%2C+Karnataka+562110!3m2!1d13.203244!2d77.60969!5e0!3m2!1sen!2sin!4v1525344951646" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
    </section> -->
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import axios from '../axios-auth';
// import * as utils from '../assets/appUtils';
export default {
    data() {
        return {
            isLoading: false,
            filters: {
                accountName: '',
                displayName: ''
            },
            modalShow: true,
            showMap: false,
            fields: [
                {
                    key: 'index',
                    label: 'Sl'
                },
                {
                    key: 'accountName',
                    sortable: true,
                    label: 'Login ID'
                },
                {
                    key: 'displayName',
                    sortable: true
                },
                {
                    key: 'attending',
                    sortable: true,
                    formatter: value => {
                        return value ? 'Yes' : 'No';
                    }
                },
                {
                    key: 'contactNumber'
                },
                {
                    key: 'pickupPoint'
                }
            ],
            formFields: {
                attending: true,
                contactNumber: null,
                pickupPoint: 'Office'
            }
        };
    },
    methods: {
        refresh() {
            if (!this.$store.getters.OUTING_LOADING_STATUS_GETTER) {
                this.$store.dispatch('OUTING_FETCH_ACTION');
            }
        },
        updateContactNumber(contactNumber) {
            this.formFields.contactNumber = contactNumber;
        },
        updatePickupPoint(pickupPoint) {
            this.formFields.pickupPoint = pickupPoint;
        },
        updateAttending(attending) {
            this.formFields.attending = attending;
        },
        onSubmit(evt) {
            evt.preventDefault();
            this.scanActionText = 'Scanning in progress';
            this.isLoading = true;
            this.modalShow = false;
            let accountName =
                localStorage.getItem('accountName') ||
                this.$store.getters.AUTH_USER_DETAILS_GETTER.accountName ||
                'Unknown account name';
            let displayName =
                localStorage.getItem('displayName') ||
                this.$store.getters.AUTH_USER_DETAILS_GETTER.displayName ||
                'Unknown display name';

            // Submit data
            axios
                .post('/outing/create', {
                    accountName,
                    displayName,
                    attending: this.formFields.attending || 'true',
                    contactNumber: this.formFields.contactNumber || 'null',
                    pickupPoint: this.formFields.pickupPoint
                })
                .then(result => {
                    this.isLoading = false;
                    // this.modalShow = false;
                    // dispatch event
                    this.$store.dispatch('OUTING_FETCH_ACTION');
                })
                .catch(e => {
                    this.isLoading = false;
                });
        }
    },
    computed: {
        allCobrands() {
            return this.$store.getters.OUTING_GETTER;
        },
        myData() {
            let myData = [];
            let outingDetails = this.$store.state.OutingStore.outing;
            if (outingDetails && outingDetails.length > 0) {
                myData = outingDetails.filter(details => {
                    return details.accountName === localStorage.getItem('accountName');
                });
                if (myData.length) {
                    let data = myData[0];
                    this.updateContactNumber(data.contactNumber);
                    this.updatePickupPoint(data.pickupPoint);
                    this.updateAttending(data.attending);
                }
            }
            return myData ? myData[0] : { attending: false, contactNumber: null, pickupPoint: '' };
        },
        filteredDetails() {
            let filters = this.filters;
            let data = this.$store.getters.OUTING_GETTER;
            for (const key in filters) {
                if (filters.hasOwnProperty(key) && filters[key]) {
                    const element = filters[key].trim();
                    if (element) {
                        let newData = data.filter(item => {
                            let reg = new RegExp(element.toLowerCase(), 'gi');
                            return reg.test(item[key].toString().toLowerCase());
                            // return item[key].toLowerCase().includes(element);
                        });
                        data = newData; // reassign filtered list
                    }
                }
            }
            return data;
        }
    },
    components: {
        FontAwesomeIcon
    },
    created() {
        axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');

        if (!this.$store.getters.OUTING_GETTER && !this.$store.getters.OUTING_LOADING_STATUS_GETTER) {
            this.$store.dispatch('OUTING_FETCH_ACTION');
        }
    }
};
</script>

<style>
.legend-small {
    font-size: 12px;
    font-weight: bold;
}
.hint {
    font-style: italic;
}
</style>
