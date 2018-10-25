<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1>Add Blog Post</h1>

                <form @submit.prevent="publish">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" @input="post.title = $event.target.value">
                    </div>

                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea v-model.lazy.trim="post.content" class="form-control" id="content"></textarea>
                    </div>

                    <div class="form-group">
                        <input type="checkbox" v-model="post.publishImmediately" class="form-control" id="publishImmediately">
                        <label for="publishImmediately">Publish immediately</label>
                    </div>

                    <div class="form-group">
                        <label>Share on</label>
                        <div v-for="media in formData.socialMedia">
                            <input type="checkbox" v-model="post.shareOn" class="form-control" :id="media" :value="media">
                            <label :for="media">{{ media }}</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Categories</label>
                        <div v-for="category in formData.categories">
                            <input type="radio" v-model="post.category" class="form-control" :id="category" :value="category">
                            <label :for="category">{{ category }}</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="series">Series</label>
                        <select id="series" v-model="post.series">
                            <option value="">Choose</option>
                            <option v-for="series in formData.series" :value="series">
                                {{ series }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                       <input type="submit" class="btn btn-default">
                    </div>
                </form>

                <hr>

                <table class="table table-striped" v-if="isSubmited">
                    <thead>
                        <tr>
                            <td class="col-xs-6"><strong>Field</strong></td>
                            <td class="col-xs-6"><strong>Value</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{{ post.title }}</td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td style="white-space: pre;">{{ post.content }}</td>
                        </tr>
                        <tr>
                            <td>Publish immediately</td>
                            <td>{{ post.publishImmediately }}</td>
                        </tr>
                        <tr>
                            <td>Share on</td>
                            <td>
                                <ul>
                                    <li v-for="media in post.shareOn">{{ media }}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{{ post.category }}</td>
                        </tr>
                        <tr>
                            <td>Series</td>
                            <td>{{ post.series }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isSubmited: false,
                post: {
                    title: '',
                    content: '',
                    publishImmediately: true,
                    shareOn: ['Facebook'],
                    category: 'Frontent',
                    series: 'Vue.js: From Beginner to Professional'
                },
                formData: {
                    socialMedia: ['Facebook', 'Twitter'],
                    categories: ['Frontend', 'Backend'],
                    series: [
                        'Vue.js: From Beginner to Professional',
                        'Complete Guide to Elasticsearch'
                    ]
                }
            };
        },
        methods: {
            publish(){
                this.isSubmited = true;
                alert('submitted');
            }
        }
    }
</script>

<style>
    input[type="radio"] + label,
    input[type="checkbox"] + label {
        font-weight: normal;
    }
</style>